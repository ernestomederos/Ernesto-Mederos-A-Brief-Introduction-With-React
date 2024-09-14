import React, { useState } from "react";
import CenteredSection from "../layouts/centeredSection";
import CenteredContainer from "../layouts/centeredContainer";
import VerticallyCenteredContainer from "../layouts/verticallyCenteredContainer";
import HorizontalScroll from "../layouts/horizontalScroll";
import DownArrow from "../elements/downArrow";
import Reference from "../../assets/images/12STEPS/1.png";
import Insights from "../../assets/images/12STEPS/2.png";
import Design from "../../assets/images/12STEPS/3.png";
import Feedback from "../../assets/images/12STEPS/4.png";
import Template from "../../assets/images/12STEPS/5.png";
import Content from "../../assets/images/12STEPS/6.png";
import Assemble from "../../assets/images/12STEPS/7.png";
import Lockdown from "../../assets/images/12STEPS/8.png";
import Functional from "../../assets/images/12STEPS/9.png";
import Alchemy from "../../assets/images/12STEPS/10.png";
import Usability from "../../assets/images/12STEPS/11.png";
import Publish from "../../assets/images/12STEPS/12.png";
import P from "../elements/p";
import H2 from "../elements/h2";
import Card from "../elements/card";

const workflowData = {
    pageNumber: "II",
    headline2: "12 Steps",
    subtitle: "THE BULLET-PROOF GUIDE TO BUILD YOUR DIGITAL MASTERPIECE!",
    steps: [
        { id: 1, image: Reference, headline3: "Reference Ready", paragraph: "First things first: we need to find your website’s soul mate! Whether it’s a dazzling example from your industry or one of our top picks, we’ll agree on a reference that aligns with your vision. It’s like dating but for design—finding the perfect match to inspire your site’s look and feel." },
        { id: 2, image: Insights, headline3: "Initial Insights", paragraph: "Now that we’ve got our muse, it’s time to dive into the nitty-gritty. We’ll gather all the juicy details about your brand, audience, and goals. Think of this as the foundation—we’re laying down the bricks before we start building the house." },
        { id: 3, image: Design, headline3: "Design Drafting", paragraph: "Here’s where the pencils meet the paper—well, digital pencils, anyway. We’ll sketch out some initial designs based on our reference, aiming to capture the vibe you’re going for. These drafts are like rough sketches before the masterpiece takes shape." },
        { id: 4, image: Feedback, headline3: "Feedback Loop", paragraph: "This is your time to shine! We’ll present the drafts to you and gather your thoughts, suggestions, and maybe a few curveballs. Don’t worry, we love feedback—it’s what takes our drafts from ‘meh’ to ‘wow’!" },
        { id: 5, image: Template, headline3: "Template Triumph", paragraph: "With your feedback in hand, we’ll start templating every element of your site—logos, titles, buttons, you name it. This is like crafting a toolkit of awesomeness, tailored specifically for your project. We’re building the Lego pieces before we assemble the final model." },
        { id: 6, image: Content, headline3: "Content Creation", paragraph: "Content is king, queen, and the entire court! We’ll work on writing and refining the content that will populate your website. Whether it’s snappy headlines, persuasive paragraphs, or clear CTAs, we’ll make sure your message is loud and clear." },
        { id: 7, image: Assemble, headline3: "Assets Assemble", paragraph: "With our templates and content ready, it’s time to gather all the visual goodies—images, icons, graphics, you name it. This is where your website’s personality starts to shine through, like picking the perfect outfit for a big event." },
        { id: 8, image: Lockdown, headline3: "Layout Lockdown", paragraph: "We’ll piece together the puzzle, arranging your content and assets into a cohesive layout. This is like setting up the stage before the big show—everything needs to be in its place, looking sharp and ready for the spotlight." },
        { id: 9, image: Functional, headline3: "Functional Flourishes", paragraph: "Now it’s time to add those bells and whistles that make your site sing! We’ll integrate the functionalities you need—forms, sliders, galleries, you name it. It’s like adding the finishing touches to a gourmet meal." },
        { id: 10, image: Alchemy, headline3: "Animation Alchemy", paragraph: "Who says websites can’t dance? We’ll sprinkle in some animations to bring your site to life. Whether it’s a smooth hover effect or a dynamic cursor, these touches will make your site feel like it’s got rhythm." },
        { id: 11, image: Usability, headline3: "Usability Uplift", paragraph: "Before we hit the ‘go live’ button, we’ll put your site through its paces. We’re talking usability testing, speed checks, and mobile optimization. It’s like a dress rehearsal to make sure everything’s perfect for opening night." },
        { id: 12, image: Publish, headline3: "Polish & Publish", paragraph: "The final step—giving everything one last shine before we roll out the red carpet. We’ll ensure everything is polished to perfection, then launch your site into the wild. Get ready to take a bow, because your digital masterpiece is ready for the world to see!" }
    ]
};

const pageNumber = workflowData.pageNumber;
const headline2 = workflowData.headline2;
const subtitle = workflowData.subtitle;
const items = workflowData.steps;
function Workflow() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <CenteredSection>
            <P text={pageNumber} />
            <CenteredContainer>
                <H2 text={headline2} />
                <P text={subtitle}></P>
            </CenteredContainer>
            <CenteredContainer>
                <HorizontalScroll>
                    {items.map((item, key) => (
                        <Card
                            key={item.id}
                            animationKey={key}
                            onMouseEnter={() => setHoveredCard(key)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {hoveredCard === key ? (<>
                                <DownArrow />

                                <P text={item.paragraph} />
                            </>
                            ) : (
                                <>
                                    <VerticallyCenteredContainer>
                                        <img src={item.image} data-aos="fade-in" alt={`Step ${item.id}`} height="250" />
                                        <P text={item.id + `. ` + item.headline3} />
                                    </VerticallyCenteredContainer>

                                </>
                            )}
                        </Card>
                    ))}
                </HorizontalScroll>
            </CenteredContainer>
        </CenteredSection>
    );
}

export default Workflow;
