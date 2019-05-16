import React, {Component} from "react";
import {fromJS} from "immutable";
import {
    AboutUsWrapper,
    AboutUsHeader,
    TeamList,
    TeamItem,
    TeamInfo,
    WorkList,
    WorkItem,
    Contact
} from "./style";

class About extends Component{
    render() {
        const team = fromJS([{
            id: 1,
            imgUrl: "https://i.loli.net/2019/05/17/5cdd9ed57308f38646.jpg",
            name: "Hank Luo",
            intro: "Students",
            works: ["Html","CSS","React","Design"],
            contact: [{
                icon: "&#xe639;",
                linkUrl: "https://www.instagram.com/luo_xing_han/"
            },{
                icon: "&#xf25e;",
                linkUrl: "https://vk.com/ro.hank"
            }]
        },{
            id: 2,
            imgUrl: "https://i.loli.net/2019/05/17/5cdd9f9c5cf4833721.jpg",
            name: "Hoen",
            intro: "Students",
            works: ["NodeJs","Database","MySQL"],
            contact: [{
                icon: "&#xe639;",
                linkUrl: "https://www.instagram.com/alazoey/"
            },{
                icon: "&#xf25e;",
                linkUrl: "https://vk.com/id509055370"
            }]
        }]);

        return(
            <AboutUsWrapper>
                <AboutUsHeader>
                    <h2>What we're made of</h2>
                    <p>We tried to do a free publicity and management of all buskers. Even if our developers are not mature enough, or the website are full of loopholes. We still thank them for their hard work and respect for their staying up late to write code.</p>
                </AboutUsHeader>
                <TeamList>
                    {team.map((item, index)=>{
                        return (
                            <TeamItem key={item.get("id")}>
                                <img
                                    className="team-pic img-left"
                                    alt={item.get("imgUrl")}
                                    src={item.get("imgUrl")}/>
                                <TeamInfo>
                                    <h3 className="name">{item.get("name")}</h3>
                                    <p className="intro">{item.get("intro")}</p>
                                    <WorkList>
                                        {item.get("works").map((child, index)=>{
                                            return (
                                                <WorkItem key={index}>{child}</WorkItem>
                                            )
                                        })}
                                    </WorkList>
                                    <Contact>
                                        {item.get("contact").map((child, index)=>{
                                            return (
                                                <a key={index} href={child.get("linkUrl")}>
                                                    <span className="iconfont" dangerouslySetInnerHTML={{__html: child.get("icon")}}/>
                                                </a>
                                            )
                                        })}
                                    </Contact>
                                </TeamInfo>
                            </TeamItem>
                        )
                    })}
                </TeamList>
            </AboutUsWrapper>
        )
    }
}

export default About;