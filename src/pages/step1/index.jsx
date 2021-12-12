import { Container } from "../../components/Container";
import { TopHead } from "../../components/TopHead";
import { MenuItem } from "../../components/MenuItem";
import { ActionBar } from "../../components/ActionBar";
import {
  Heading,
  SubHeading,
  HLine,
  Label,
  InfoLabel,
} from "../../components/Typography";
import { CheckGroup } from "../../components/Checkbox";

export const Step1 = () => {
  return (
    <div className="container">
      <TopHead
        menuItems={
          <>
            <MenuItem label="Dashboard" />
            <MenuItem label="Classes" />
            <MenuItem label="Messages" />
            <MenuItem label="Payments" />
            <MenuItem label="Settings" />
          </>
        }
      />
      <ActionBar
        style={{ marginTop: "10px" }}
        data={[
          {
            icon: "subjects",
            label: "Select Subjects",
            progress: 100,
          },
          {
            icon: "teaching-services",
            label: "Teaching Services",
            progress: 40,
          },
          {
            icon: "user",
            label: "Basic Information",
            progress: 0,
          },
          {
            icon: "education",
            label: "Education & Experience",
            progress: 0,
          },
          {
            icon: "badge",
            label: "Your Accomplishments",
            progress: 0,
          },
          {
            icon: "confirm",
            label: "Final Confirmation",
            progress: 0,
          },
        ]}
      />
      <Heading label="Teaching Services" />

      <Container>
        <>
          <SubHeading
            style={{ paddingTop: "40px", paddingBottom: "30px" }}
            label="Class Types"
          />
          <CheckGroup
            data={[
              {
                checked: true,
                label: "Regular / Recurring Tutions",
                onClick: () => {},
                parent: true,
                showInfo: true,
              },
              {
                checked: false,
                label: "Once a week",
                onClick: () => {},
                parent: false,
              },
              {
                checked: false,
                label: "Once a day",
                onClick: () => {},
                parent: false,
              },
              {
                checked: false,
                label: "Week Days",
                onClick: () => {},
                parent: false,
              },
              {
                checked: true,
                label: "Single / Non-Recurring Tutions",
                onClick: () => {},
                parent: true,
                showInfo: true,
              },
              {
                checked: false,
                label: "1:1 Session",
                onClick: () => {},
                parent: false,
              },
              {
                checked: false,
                label: "1: Many Session",
                onClick: () => {},
                parent: false,
              },
            ]}
          />
          <HLine />
          <Label label="Teaching Location" style={{ paddingBottom: "30px" }} />
          <CheckGroup
            data={[
              {
                parent: true,
                checked: false,
                label: "In - Person (Your Location)",
                onClick: () => {},
              },
              {
                parent: true,
                checked: false,
                label: " In-Person (Student Location)",
                onClick: () => {},
              },
              {
                parent: true,
                checked: false,
                label: "Online",
                onClick: () => {},
              },
            ]}
          />
          <SubHeading style={{ paddingBottom: "10px" }} label="Hourly rate" />
          <InfoLabel
            style={{ paddingBottom: "20px" }}
            label="Please choose a default hourly rate. Most tutors charge between ₹135 - ₹163 per hour"
          />
        </>
      </Container>
    </div>
  );
};
