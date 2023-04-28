import React from 'react'
import DashboardBox from '../../components/DashboardBox'
import FlexBetween from '../../components/FlexBetween'
import { useMediaQuery } from '@mui/material';

const gridTemplateLargeScreens = `
  "a a a"
  "a a a"
  "a a a"
  "a a a"
  "b b b"
  "b b b"
  "b b b"
  "c c c"
  "c c c"
  "c c c"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <FlexBetween m="1rem"
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
            gridTemplateColumns: "repeat(3, minmax(400px, 500px))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreens,
          }
          : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
          }
      }>
      <DashboardBox gridArea="a">
        <FlexBetween>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          L          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          orem ipsum dolor sit amet consectetur adipisicing 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="b">
        <FlexBetween>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
          L          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
orem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="c">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
        L          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam dolorem perspiciatis tenetur a illum quisquam sapiente est eveniet vel saepe dolor possimus ducimus nesciunt, repellendus ut fuga! Illum, delectus?
orem ipsum dolor sit amet consectetur adipisicing       </DashboardBox>

    </FlexBetween>
  )
}

export default Dashboard
