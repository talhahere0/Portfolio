import {makeStyles} from '@material-ui/core/styles'

export default makeStyles ((theme)=>({
 
    Navbar:{
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        borderBottom: '1px solid #EEEEEE',
        
    },
    Logo:{
        color:'#1597E5',
        fontFamily:'Poppins',
        fontWeight:'700',
        [theme.breakpoints.down(480)]:{
            fontSize:'30px',
            marginRight:'140px',
            
        }
    },
    MenuList:{
        display: 'flex',
        listStyle:'none',
        gap:'4rem',
       [theme.breakpoints.down(480)]:{
           display: 'none',
       }
    },
    MenuListItem:{
        fontFamily: 'Poppins',
        color:'#1597E5'

    }
}))