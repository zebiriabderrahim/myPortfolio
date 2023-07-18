import { ReactComponent as RocketIcon } from "../assets/img/rocket.svg";
import {MdOutlineDone} from "react-icons/md"
import timelineElements from "../assets/js/timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/css/Timeline.css"

function Timeline() {
  return (
    <section id="education">
      <h1 className="title">Education</h1>
      <VerticalTimeline lineColor={"#cdcdcdbc"}>
        {timelineElements.map((element,index) => {
          return (
            <VerticalTimelineElement
              key={index}
              contentArrowStyle={{ borderRight: "none" }}
              contentStyle={{
                background: "transparent",
                boxShadow: "none",
                padding: "0em 0em ",
              }}
              iconStyle={{ background: "#07da12" }}
              icon={<MdOutlineDone />}
            >
              <h1 className="vertical-timeline-element-title">
                {element.title}
              </h1>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <h5 className="vertical-timeline-element-subtitle">
                {element.date}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            boxShadow: "none",
            padding: "0em 0em ",
          }}
          iconStyle={{ background: "#4b5b73" }}
          icon={<RocketIcon />}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
