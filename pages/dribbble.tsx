import { useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import { Dribbble, DribbbleImage } from "./../components/dribbble";
import { server, getData } from './../common/server';

interface Props {
    dribbbleImages: DribbbleImage[]
}

const DribbblePage: NextPage<Props> = ({ dribbbleImages }) => {
  useEffect(() => {});
  return (
    <div>
      <Dribbble dribbbleImages={dribbbleImages} />
    </div>
  );
};


DribbblePage.getInitialProps = async ({ }) => {
    const dribbbleJson = await getData(`${server}/api/dribbble`)
    return {  
      dribbbleImages: dribbbleJson}
  }
  
  export default DribbblePage