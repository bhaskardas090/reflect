import React from "react";
import styles from "../../styles/FAQ.module.css";
// MUI component imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Component imports
import PageHeader from "../../common/PageHeader/PageHeader";
// Library imports
import { useNavigate } from "react-router";

function FAQs() {
  const navigate = useNavigate();
  return (
    <div className={styles.faq}>
      <PageHeader
        title={"Frequently Asked Questions"}
        type="transparent"
        onclick={() => navigate("/")}
      />

      <div className={styles.according}>
        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              What is mental well-being ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Mental well-being refers to a person's psychological and emotional
              state, encompassing factors such as feelings of happiness,
              contentment, resilience, and the ability to cope with life's
              challenges. It's about maintaining a positive mental state, having
              healthy relationships, managing stress, and having a sense of
              purpose and fulfillment in life. It's an essential aspect of
              overall health and quality of life.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              What are some daily practices to enhance mental well-being?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul style={{ paddingLeft: "2rem" }}>
                <li>Mindfulness</li>
                <li>Physical Activity</li>
                <li>Healthy Diet</li>
                <li>Adequate Sleep</li>
                <li>Stress Management</li>
                <li>Social Connections</li>
                <li>Positive Self Talk</li>
                <li>Hobbies</li>
                <li>Limit Screen Times</li>
                <li>Seek Help from professionals</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              How can I develop resilience and cope with life's challenges?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul style={{ paddingLeft: "2rem" }}>
                <li>Mindset</li>
                <li>Problem Solving</li>
                <li>Social Support</li>
                <li>Self Care</li>
                <li>Adaptability</li>
                <li>Mindfulness</li>
                <li>Learn from Setbacks</li>
                <li>Seek Professional Help</li>
                <li>Practice Patience</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              What is mindfulness, and how does it support mental well-being?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Mindfulness is the practice of being fully present,
              non-judgmentally, in the current moment. It supports mental
              well-being by reducing stress, increasing self-awareness, and
              promoting emotional regulation. It helps individuals focus on the
              present, leading to improved concentration, better coping with
              challenges, and a greater sense of overall calm and contentment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              How does physical activity impact mental well-being?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Physical activity boosts mental well-being by releasing
              endorphins, which reduce stress and improve mood. It increases
              brain function, enhances self-esteem, and reduces symptoms of
              anxiety and depression. Regular exercise also improves sleep,
              fosters social connections, and overall contributes to a positive
              sense of mental health.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              How does social connection contribute to mental well-being ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Social connections foster mental well-being by providing emotional
              support, reducing feelings of loneliness, and promoting a sense of
              belonging. Meaningful relationships enhance self-esteem, provide
              opportunities for sharing experiences, and reduce stress. They
              offer a support network during challenges, leading to improved
              overall mental health and resilience.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              How can hobbies and creative activities improve mental well-being?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hobbies and creative activities enhance mental well-being by
              providing a sense of accomplishment, promoting relaxation, and
              reducing stress. They stimulate creativity, boost mood, and
              increase positive emotions. Engaging in these activities can serve
              as a form of self-expression, leading to greater overall
              satisfaction and improved mental health.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              What is the role of gratitude in enhancing mental well-bein?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Gratitude plays a significant role in enhancing mental well-being.
              It shifts focus towards positive aspects of life, fostering
              optimism. Expressing gratitude reduces stress, improves
              relationships, and boosts overall happiness. It promotes a sense
              of contentment, enhances self-esteem, and cultivates resilience,
              contributing to a more positive and balanced mental state.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              How does sleep quality affect mental well-being?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sleep quality is crucial for mental well-being. Poor sleep can
              lead to irritability, mood swings, difficulty concentrating, and
              increased stress. It impairs cognitive function, affecting
              decision-making and problem-solving. Consistently inadequate sleep
              is linked to anxiety, depression, and other mental health issues.
              Good sleep fosters emotional balance, enhances coping skills, and
              supports overall mental wellness.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              How can I maintain a healthy work-life balance for my mental
              well-being?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul style={{ paddingLeft: "2rem" }}>
                <li>Set Boundaries</li>
                <li>Prioritize</li>
                <li>Time Management</li>
                <li>Take Breaks</li>
                <li>Self-Care</li>
                <li>Family and Friends</li>
                <li>Communicate</li>
                <li>Have flexibility</li>
                <li>Delegate tasks</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              What are the benefits of spending time in nature for mental
              well-being?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Spending time in nature enhances mental well-being by reducing
              stress, boosting mood, and promoting relaxation. It increases
              mindfulness, improves focus, and decreases symptoms of anxiety and
              depression. Nature connection fosters a sense of awe, promotes
              physical activity, and provides a peaceful environment conducive
              to overall mental wellness.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              Can volunteering or helping others improve mental well-being?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, volunteering and helping others can significantly improve
              mental well-being. It boosts feelings of purpose, self-worth, and
              satisfaction. Volunteering can reduce stress, combat feelings of
              isolation, and enhance social connections. The act of giving back
              often promotes empathy and gratitude, leading to a more positive
              and fulfilling mental state.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginBottom: "0.5rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{ fontWeight: "bold" }}>
              What are some effective strategies for promoting mental well
              being?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul style={{ paddingLeft: "2rem" }}>
                <li>Mindfulness and Meditation</li>
                <li>Physical Activity</li>
                <li>Healthy Diet</li>
                <li>Adequate Sleep</li>
                <li>Social Connections</li>
                <li>Limit Stress</li>
                <li>Seek Professional help</li>
                <li>Set Goals</li>
                <li>Hobbies and creativity</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;
