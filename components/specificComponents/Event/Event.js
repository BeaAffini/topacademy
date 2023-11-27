// import React, { Component } from "react";

// export default class Event extends Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 Event:{this.props.blok.title}</div>
//         );

//     }
// }

import React, { Component } from "react";
import css from "./Event.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Event extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>
				<main>
					<Hero blok={this.props.blok} contentTypeTag="course" />
					<div className={css["event__main-content"]}>
						<div id="event__short-description" key="event__short-description" className={css["event__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Hello everyone</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
					</div>

					{this.props.blok.images && this.props.blok.images.map((nestedBlok) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
					))}
				</main>
			</div>
		);

	}
}