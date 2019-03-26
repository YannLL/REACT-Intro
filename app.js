
const Header = (props) =>{
	return (
		<header>
			<h1>{props.title}</h1>
			<span className="stats">Players: {props.totalPLayers}</span>
		</header>
	)
}


const Player = (props) =>{
	return(
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
				{props.name}
			</span>

		{/* Inject Counter component */}

		<Counter score={props.score} />
		</div>
	);
}

class Counter extends React.Component {
	state = {
			score: 0
		}

	incrementScore = () =>{
		this.setState( prevState => ({
			score: this.state.score +1
		}));
	}

	decrementScore = () =>{
		this.setState( prevState => ({
			score: this.state.score -1
		}));
	}

	render(){
		return(
			<div className="counter">
				<button className="counter-action decrement" onClick={this.decrementScore}> - </button>
				<button className="counter-score"> {this.state.score} </button>
				<button className="counter-action increment" onClick={this.incrementScore}> + </button>
			</div>
		);
	}
}

class App extends React.Component {
	state = {
		players : [
		  {
		    name: "Guil",
		    id: 1
		  },
		  {
		    name: "Treasure",
		    id: 2
		  },
		  {
		    name: "Ashley",
		    id: 3
		  },
		  {
		    name: "James",
		    id: 4
		  }
		]
	}

	handleRemovePlayer = (id) => {
		this.setState ( prevState => {
			return{
				players: prevState.players.filter( p => p.id !==  id )
			};
		});
	}

	render() {	
		return (
			<div className="scoreboard">
				<Header title="scoreboard" totalPLayers={this.state.players.length}/>



				{/* Players List*/}
				{this.state.players.map(player =>
				<Player 
					name={player.name}
					id={player.id}
					key={player.id.toString()}
					removePlayer={this.handleRemovePlayer}
				/>
				)}
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
	); 