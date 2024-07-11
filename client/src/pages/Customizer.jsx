import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from '../config/config';
import state from "../store";
import { download } from "../assets";

import { downloadCanvasToImage, reader } from "../config/helpers";
import {EditorTabs, FilterTabs} from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";

import { CustomButton, AIPicker, ColorPicker, FilePicker, Tab } from "../components";


const Customizer = () => {

  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div key="custom" className="absoluet top-0 z-10 left-0 " {...slideAnimation('left')}>
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab)=>(
                  <Tab key={tab.name}
                  handleClick={()=> {}}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="absolute z-10 top-5 right-5 " {...fadeAnimation}>
            <CustomButton type="filled" title={"Go Back"} handleClick={()=> state.intro = true} customStyles="w-fit px-4 py-2.5 fon-bold text-sm"/>
          </motion.div>

          <motion.div className="filtertabs-container " {...slideAnimation('up')}>
            {FilterTabs.map((tab)=>(
              <Tab key={tab.name} 
              handleClick={()=> {}} 
              isFilterTab
              isActiveTab=""
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer