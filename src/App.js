import { quotes } from "./quotes";
import { colors } from "./colors";
import React from "react";
import "./App.css";

function randomIndex(num) {
	return Math.floor(Math.random() * num);
}

class App extends React.Component {
	constructor(props) {
		super(props);
		let i = randomIndex(171);
		let c = randomIndex(3);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			quote: quotes[i].quote,
			author: quotes[i].author,
			color: colors[c],
		};
	}

	handleClick() {
		let nqi = randomIndex(171);
		let c = randomIndex(3);
		this.setState((state) => ({
			quote: quotes[nqi].quote,
			author: quotes[nqi].author,
			color: colors[c],
		}));
	}

	render() {
		return (
			<div className="App" style={{ backgroundColor: this.state.color }}>
				<div id="quote-box">
					<div className="text">
						<h2 id="text">"{this.state.quote}"</h2>
						<h3 id="author">- {this.state.author}</h3>
					</div>
					<div className="buttons">
						{/* New Quote Button */}
						<button onClick={this.handleClick} id="new-quote">
							New Quote
						</button>

						{/* Tweet Button */}
						<a
							className="twitter-share-button"
							href={
								"https://twitter.com/intent/tweet?text=" +
								"%22" +
								this.state.quote +
								"%22" +
								"%0a" +
								"- " +
								this.state.author
							}
							id="tweet-quote"
							target="_blank"
						>
							<img
								src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
								alt="Tweet"
							/>
						</a>
					</div>
					<div className="att">
						<p>
							Developed by{" "}
							<a
								href="https://twitter.com/nourhabra"
								target="_blank"
								className="twitter-acc"
							>
								@NourHabra
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
