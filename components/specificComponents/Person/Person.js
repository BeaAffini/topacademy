import React, { Component } from "react";
import css from "./Person.module.scss"; //we are using scss -> more powerfull and less complex to use than css
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default class Person extends Component {

	constructor(props) { //first thing that is being executed 
		super(props);
	}

	render() { //thing that is going to be executed to make visual what you want to show  
		return (
			<>
				<div {...storyblokEditable(this.props.blok)} className={css["wrapper"]}>
					<div className={css["content"]}>
						<div className={[css["box"], css["head"]].join(" ")}>
							<h1>{this.props.blok.title} {this.props.blok.lastname} {this.props.blok.firstname}</h1>
						</div>
						<div className={[css["box"], css["sidebar"]].join(" ")}>
							<div className={css["personalimage"]}><img src={this.props.blok.photo.filename} /></div>
							<div className={css["personaldetails"]}>
								<div className={css["personaldetailitem"]}>{this.props.blok.title} {this.props.blok.firstname} {this.props.blok.lastname}</div>
								<div className={css["personaldetailitem"]}>{this.props.blok.dateofbirth}</div>
								<div className={css["personaldetailitem"]}>{this.props.blok.location}</div>
							</div>
						</div>
						<div className={[css["box"], css["experience"]].join(" ")}>
							<h2>Experience</h2>
							{this.props.blok.experiences.map((nestedBlok) => (
								<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
							))}
						</div> 
						<div className={[css["box"], css["foot"]].join(" ")}>
							<div>&copy; {this.props.blok.firstname} {this.props.blok.lastname} {new Date().getFullYear()}</div>
						</div>
					</div>
				</div>
			</>
		);
		
	}
}

/*component folder: anything that can be shown on the screen will be a component 
the structure that the professor gave is: 
- genericComponents: 
- layoutComponents 
- specificComponents
- technicalComponents */