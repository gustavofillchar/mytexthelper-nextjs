import {Home} from '../components/Home'
import Head from "next/head";

export default function App() {
  return (
  <>
  <Head>
  <meta name="description" content="A simple and free tool for converting text to UPPERCASE or LOWERCASE. Convert to URL format, encode, decode. Simple and easy to use. Free and online. Converter of texts and words for upper and lower case. Decode that URL full of strange characters into clean text."/>
    <link rel="icon" href="./assets/static/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Text Helper | Free tool | Convert Case Helper | Encode Text | Decode Text</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
  </Head>

  <Home/>
  </>
  )
  
}
