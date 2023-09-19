import React, { Component } from 'react'
import { Link} from "react-router-dom";
import NarbarForm from './NarbarForm';
// import '../../src/navbar.css'
import '../../src/navbar.css'


// import '../'
// import SignUp from './SignUp';
// import design from '../src/design.css'
// import Facebook from '../imageStorage/logo192.png'




class Narbar extends Component {
	constructor (){
		super()
		this.state ={ 
			Message : 'ABOUT', Message2: 'PORTFOLIO', Messager:'CARTEGORIES', ADDRESS: 'CONTACT ADDRESS', Reg: 'REGISTRATION',
			action : 'Signup'

		}
	}

	render(){
		return (
			<nav className="navbar navbar-expand-lg  back blackNav">
					<a className="navbar-brand text-white" href='#'>TOMMYREACT</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<Link className="nav-link text-white active" aria-current="page" to="/">{this.props.name}</Link>
							</li>
							<li class="nav-item">
								<Link className="nav-link text-white" to="/admin%page">{this.state.Message2}</Link>
							</li>
							<li className="nav-item dropdown">
								<Link class="nav-link dropdown-toggle text-white" to="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								{this.state.Messager}
								</Link>
								<ul class="dropdown-menu">
									<Link class="dropdown-item" to= {"/libaries"}>Library</Link>
									<li><a class="dropdown-item" to={"/libraryPro"}>Library Pro</a></li>
									<li><hr class="dropdown-divider" /></li>
									<li><a class="dropdown-item" to="/jjo">Something else here</a></li>
								</ul>
							</li>
							<li class="nav-item">
								<Link  to="/contact" className="nav-link text-white" role="status" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">{this.state.ADDRESS}</Link>
							</li>

							<li className="nav-item dropdown">
								<a class="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								   {this.state.Reg}
								</a>

								<ul  class="dropdown-menu">
								     <Link className="dropdown-item" to ={'/signup'}> {this.state.action} </Link>

									<Link class="dropdown-item" to ={'/login'}>Login</Link>
									<li><hr class="dropdown-divider" /></li>
								</ul>
							</li>

							<li class="nav-item">
								<Link className="nav-link text-white" to="/fggh">{this.state.Message}</Link>
							</li>

						</ul>
					   <NarbarForm namer="search" />
						
					</div>
			    

			</nav>

		)
    }
}

export default Narbar

// function CustomLink({to, children, ...props}) {
// 	// const path = window.location.pathname
// 	const  resolvedPath = useResolvedPath(to)
// 	const isActive = useMatch( {path : resolvedPath.pathname, end : true} )

// 	return(
// 		<li className  = {isActive ? "active " : ''}>
// 		   <Link className="dropdown-item" to={to} {...props} >Sign up</Link>
// 		</li>
// 	)
	
// }