import React, { useEffect } from 'react';
import { getVaccineList } from './reducers/vaccineSlice';
import { connect } from 'react-redux'

const App = (props) => {


    useEffect(() => {
        props.dataDispatch()
    }, [])

    let display = (<h4 style={{ textAlign: 'center' }}>Loading...</h4>);



    const { registrants, loading, error } = props.vaccineData

    if (!loading) {

        display = <table className="table">
            <thead>
                <tr>
                    <td>Member</td>
                    <td>Date</td>
                    <td>Vaccine</td>

                </tr>
            </thead>

            <tbody>
                {registrants.map((member, i) => {
                    return (
                        <tr key={i}>
                            <td>{member.name}</td>
                            <td> {member.date}</td>
                            <td>{member.vaccine}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    }

    return (<>
        <h3>Vaccine List </h3>
        {display}
    </>);
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataDispatch: () => dispatch(getVaccineList())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);