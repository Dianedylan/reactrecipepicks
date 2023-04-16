import Veggie from "../components/veggie";
import Popular from "../components/popular";
import {motion} from "framer-motion";

import React from "react";

function Home(){
    return (
        <div>
            <motion.div>
                <Veggie/>
                <Popular/>
            </motion.div>
        </div>
    )
}
export default Home;