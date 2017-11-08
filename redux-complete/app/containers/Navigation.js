
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Navigation from "../components/Navigation";
import {logout} from "../auth/state/actions";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
         authenticated: state.authState.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(logout, dispatch)
    }
}

const NavigationContainer =  connect(mapStateToProps, 
                    mapDispatchToProps) (Navigation);

//wrap it over withRouter to get access to history api

export default withRouter(NavigationContainer);