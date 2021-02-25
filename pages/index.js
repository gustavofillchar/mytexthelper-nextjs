import {Home} from './source/Home'
import Head from "next/head";

export default function App() {
  return (
  <>
  <Head>
    <meta charset="utf-8" />
    <link rel="icon" href="./assets/static/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Text Helper | Convert Case Helper | Encode Text | Decode Text</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
  </Head>

  <Home/>
  </>
  )
  
}
