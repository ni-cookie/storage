import type { NextPage } from 'next'
import HomeContainer from "../containers/Home";
import {useEffect} from "react";
import {useRouter} from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push("/products")
  })
  return <HomeContainer/>
}

export default Home
