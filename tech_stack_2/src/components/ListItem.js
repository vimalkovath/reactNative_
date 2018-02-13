import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../action'

class ListItem extends Component { 
    componentWillUpdate() {
        LayoutAnimation.spring()
    }

    renderDescription() {
        const { library, expanded } = this.props

        if (expanded)
            return (
                <CardSection>
                    <Text>{library.description}</Text>
                </CardSection>
            )
    }

    render() {
        const { id, title } = this.props.library

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.title}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    title: {
        fontSize: 18,
        paddingLeft: 15,
    },
}

//ownProps equal to this.props

function mapStateToProps(state, ownProps) {
    const expanded = ownProps.library.id === state.selectedLibraryId

    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)