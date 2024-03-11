import { configureStore } from "@reduxjs/toolkit";
import { CounterReduser } from "./ConterClid";
import { brandsReduser } from "./brandSils";

export let stor = configureStore(
    {
        reducer:{
            counter: CounterReduser,
            brand: brandsReduser

        }
    }
)