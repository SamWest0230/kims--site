import React from 'react';
import Covid from './modals/covid';
import './safety.scss';


class Safety extends React.Component {
    state = {
        nav: false,
        showmodal: false
    }
    showModal = () => {
        this.setState({
            showmodal: true
        })
    }
    closeModal = () => {
        this.setState({
            showmodal: false
        })
    }


    render() {

        return (
            <section className='safety' >
                 {this.state.showmodal && <Covid close={this.closeModal} />}
                 <div>
                 <h3 className='safety__name'onClick={this.showModal} >Covid-19 </h3>
                 </div>
                
            </section>
        )
    }

} export default Safety;