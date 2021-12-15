import { Container, ChildContainer } from "../../components/Container";
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
import { Infobox } from "../../components/Infobox";
import { Button } from "../../components/Button";
import { SelectBox } from "../../components/Select";
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

      <Container style={{ marginBottom: "20px" }}>
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
          <Infobox
            subtitle="₹ 250 - ₹500/hour"
            title="Exams IIT"
            style={{ marginBottom: "30px" }}
          />
          <Button
            fullWidth
            label="Add Rate"
            onClick={() => {}}
            style={{ marginBottom: "30px" }}
          />
          <ChildContainer style={{ marginBottom: "20px" }}>
            <SelectBox style={{ paddingBottom: "20px" }} />
            <SelectBox style={{ paddingBottom: "20px" }} />
            <div className="sub-button=block" style={{ textAlign: "end" }}>
              <Button
                label="Cancel"
                onClick={() => {}}
                size="small"
                style={{ marginRight: "20px" }}
              />
              <Button label="Save" onClick={() => {}} primary size="small" />
            </div>
          </ChildContainer>
          <SubHeading
            style={{ paddingBottom: "10px" }}
            label="Distance Travelling"
          />
          <InfoLabel
            style={{ paddingBottom: "20px" }}
            label="How far you willing to travel from your postal code"
          />
          <SelectBox style={{ paddingBottom: "100px" }} />
          <div className="button=block" style={{ paddingBottom: "20px" }}>
            <Button
              label="Back"
              onClick={() => {}}
              size="large"
              style={{ marginRight: "20px" }}
            />
            <Button label="Next" onClick={() => {}} primary size="large" />
          </div>
        </>
      </Container>
    </div>
  );
};
