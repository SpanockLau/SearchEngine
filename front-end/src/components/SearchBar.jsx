import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Divider from '@material-ui/core/Divider';
import { Search } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';


const style = theme => ({
  iconButton: {
    padding: 10,
  },
  input: {
    width: 250,
    paddingLeft: '15px'
  },
  divider: {
    width: 1,
    height: 35,
    display: 'inline',
    margin: 5,
  },
  select: {
    width: '100px',
    margin: '0 10px'
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row'
  }
});

// const catalogs = ["全部资源", "使用手册", "项目实战", "视频教程", "源码分析", "技术问答"];

class SearchBar extends Component {
  state = {
    input: this.props.match.params.input || "",
    catalog: 0, //catalog index, first is 0
  }

  handleChange = (field) => (e) => {
    this.setState({
      [field]: e.target.value,
    });
  }
  
  handleSearch = (e) => {
    e.preventDefault();
    const {input} = this.state;
    if(input) {
      this.props.history.push({
        pathname: `/search/query/${input}`,
        query: {
          input: input
        }
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { input } = this.state;
    return (
      <div>    
        <form onSubmit={this.handleSearch}>
            <Paper className={classes.searchBar}>
                {/* <Select
                  className={classes.select}
                  value={catalog}
                  onChange={this.handleChange("catalog")}
                  input={<InputBase />}
                >
                {catalogs.map((item, index) => (
                    <MenuItem key={index} value={catalogs.indexOf(item)}>{item}</MenuItem>
                  ))}
                </Select>
                <Divider className={classes.divider} /> */}
                <InputBase
                  className={classes.input}
                  placeholder="搜索技术..."
                  value = {input}
                  onChange={this.handleChange("input")}
                  inputProps={{
                    'aria-label': 'Search tech doc'
                  }}
                />
                <IconButton className={classes.iconButton} aria-label="Search"
                  color="primary"
                  // onClick={this.handleClick}
                  type="submit"
                  >
                  <Search />
                </IconButton>
            </Paper>
          {/* </Grid>
        </Grid> */}
        </form>
      </div>
    )
  }
}

const SearchRouter = withRouter(SearchBar);
export default withStyles(style)(SearchRouter);