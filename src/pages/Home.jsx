import Veggie from "../components/veggie";
import Popular from "../components/popular";
import {motion} from "framer-motion";

import React from "react";

function Home(){
    return (
        <motion.div>
            <Veggie/>
            <Popular/>
        </motion.div>
    );
}
export default Home;