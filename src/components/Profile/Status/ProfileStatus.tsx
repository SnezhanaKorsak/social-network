import React, {ChangeEvent} from 'react';

type ProfileStatusTypeProps = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusTypeProps> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        console.log(this)
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidMount() {
        this.setState({
            status: this.props.status
        })
    }

    render(): React.ReactNode {
        const userStatus = this.props.status ? this.props.status : 'no information'
        return (
            <div>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditMode}>{userStatus}</span>
                    : <input value={this.state.status}
                             onBlur={this.deactivateEditMode}
                             onChange={this.onStatusChange}
                             autoFocus/>
                }
            </div>
        )
    }
}