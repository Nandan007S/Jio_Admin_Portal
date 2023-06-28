import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import '../../styles/profile.css'
function Profile(){
    return (
        <div className='mainProfileDiv'>
            <Sidebar/>
            <div className='profileContent'>
                <Navbar/>
                <div class="profileCard">
                    <h2>Profile</h2>
                    <img src='https://images.unsplash.com/photo-1687753980500-7fca4fdecfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1046&q=80' height={'35%'} width={'75%'} id ='profileBack'/>
                    <img src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80' id='proImg'/>
                    <h3>John Doe</h3>
                    <h4>Role</h4>
                    <button className='btn btn-primary'>Log out</button>
                </div>
            </div> 
        </div>
    );
}

export default Profile;