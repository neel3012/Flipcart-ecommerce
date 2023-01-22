import React from 'react'
import {  makeStyles,alpha } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
const useStyle = makeStyles((theme)=>({

       search: {
              
              borderRadius: 2,
              backgroundColor: '#fff',
             
              marginRight: theme.spacing(2),
              marginLeft: 10,
              width: '38%',
              display: 'flex',
              color:'black',
              
              
            },
            searchIcon: {
              padding:5,
              height: '100%',
              
              pointerEvents: 'none',
              display: 'flex',
              
              color:'blue'
            },
            inputRoot: {
              fontSize:'unset',
              width:'100%'
            },
            inputInput: {
              padding: theme.spacing(1, 1, 1, 0),
              // vertical padding + font size from searchIcon
             paddingLeft:10
            },
}))
function Searchbar() {
       const classes = useStyle();
       return (
              
             
                      <div className={classes.search}>
            
            <InputBase
              placeholder="Search for products,brands and more…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
            
       )
}

export default Searchbar
