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
import TeacherCard from "../TeacherCard/TeacherCard";
import Element from "../../genericComponents/Element/Element";
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
					<div className={css["event-page__main-content"]}>
						<div id="event-page__short-description" key="event-page__short-description" className={css["event-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>What to expect</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>When</h2>
								<span className={css["eventdate"]}>{this.props.blok.startdate} - {this.props.blok.enddate}</span>
							</section>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Location</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.Location })}</div>
							</section>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>Tickets</h2>
								<div className={css["rich-text-eventdate-text"]}>{RichTextToHTML({ document: this.props.blok.tickets })}</div>
							</section>
						</div>
					</div>

					{this.props.blok.bottombloks && this.props.blok.bottombloks.map((nestedBlok) => (
						<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
					))}
					<div id="event__short-description" key="event__short-description" className={css["course-page__short-description"]}>
						<section className={css["rich-text-section--with-navigator"]}>
							<h2 className={css["rich-text-section__title"]}>Musicians Playing</h2>
							{this.props.blok.teachers && this.props.blok.teachers.map((teacher) => (
								<TeacherCard blok={teacher} key={teacher._uid} />
							))}
						</section>
					</div>
				</main>
			</div>
		);

	}
}