var HomeListing = React.createClass({
    
    loadHomesFromServer: function() {
     
      var homes = [
        {
            "address": "Graph1",
            "description": "This is first",
            "photo": "assets/images/home.jpg",
            "saves": 52,
            "saved": false
        },
        {
          "address": "Graph 2",
          "description": "This is Second",
          "photo": "assets/images/home.jpg",
          "saves": 123,
          "saved": true
        },
        {
          "address": "Graph 3",
          "description": "This is Third",
          "photo": "assets/images/home.jpg",
          "saves": 189,
          "saved": false
        },
        {
            "address": "Graph1",
            "description": "This is first",
            "photo": "assets/images/home.jpg",
            "saves": 52,
            "saved": false
        },
        {
          "address": "Graph 2",
          "description": "This is Second",
          "photo": "assets/images/home.jpg",
          "saves": 123,
          "saved": true
        },
        {
          "address": "Graph 3",
          "description": "This is Third",
          "photo": "assets/images/home.jpg",
          "saves": 189,
          "saved": false
        }
      ];
      this.setState({homes: homes});
    },
    loadSavesFromServer: function() {
     
      var saves = [
        {
          "saves": 52,
          "saved": false
        },
        {
          "saves": 123,
          "saved": true
        },
        {
          "saves": 189,
          "saved": false
        },
        {
            "saves": 2,
            "saved": false
          },
          {
            "saves": 3,
            "saved": true
          },
          {
            "saves": 44,
            "saved": false
          }
      ];
      this.setState({saves: saves});
    },
    toggleSave: function(index) {
      
      var saves = this.state.saves;
      
        if (saves[index].saved) {
        saves[index].saves--;
        saves[index].saved = false;
          }
          else {
            saves[index].saves++;
        saves[index].saved = true;
          }
          this.setState({
              saves: saves,
          });
      
     
      return saves[index].saved;
   
      },
      getInitialState: function(){
   
          var saves = [];
      var homes = [];
      
          return {
        saves: saves,
        homes: homes
      }
      },
    componentDidMount: function() {
      this.loadHomesFromServer();
      this.loadSavesFromServer();
     
    },
    render: function() {
      
      var saves = this.state.saves;
      var toggleSave = this.toggleSave;
      
      var homeNodes = this.state.homes.map(function(home, index) {
        
        if (typeof(saves[index]) == "undefined") {
          saves[index] = {saves: 0};
        }
       
        return (
          <Home
            key={index}
            id={index}
            onToggleSave={toggleSave}
            isSaved={saves[index].saved}
            photo={home.photo}
            address={home.address}
            numSaves={saves[index].saves}
          >
            {home.description}
          </Home>
        );
      });
      return (
        <div className="homeList">
          {homeNodes}
        </div>
      );
    }
  });
   
  var Home = React.createClass({
    toggleSave: function(index){
     
      return this.props.onToggleSave(index);
    },
    render: function() {
      return (
        <div className="home">
          <span className="homeAddress">
            {this.props.address}
          </span>
          <Photo src={this.props.photo}></Photo>
          <span className="homeDescription">
            {this.props.children}
          </span>
          <Saves
            id={this.props.id}
            handleSave={this.toggleSave}
            isSaved={this.props.isSaved}
            numSaves={this.props.numSaves}
          ></Saves>
        </div>
      );
    }
  });
   
  var Photo = React.createClass({
    render: function() {
      return (
        <div className="homePhoto">
          <img src={this.props.src} />
        </div>
      );
    }
  });
   
  var Saves = React.createClass({
    handleSubmit: function(e) {
      
      e.preventDefault();
      
     
      var isSaved = this.props.handleSave(this.props.id);
    },
    render: function() {
      var savedText = '';
      var submitText = 'Save';
      if (this.props.isSaved) {
        savedText = 'You have saved this home.';
        submitText = 'Remove';
      }
      
      return (
        <div className="saves">
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value={submitText} />
          </form>
        {this.props.numSaves} saves. {savedText}
        </div>
      );
    }
  });
   
  React.render(
    <HomeListing url="homes.json" savesUrl="saves.json" pollInterval={10000} />,
    document.getElementById('content')
  );