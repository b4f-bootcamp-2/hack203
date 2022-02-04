import { Component } from "react";
import styles from './Olympus.module.css'

class InApp extends Component {
    constructor(props) {
        super(props)
    }
    state = {}
    render() {
        return (
            <div className={styles.container2}>
                <div className={styles.rectangle}>
                    <p className={styles.notificationtext}>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default InApp;