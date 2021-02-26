import {Home} from '../components/Home'
import Head from "next/head";

export default function App() {
  return (
  <>
  <Head>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="My Text Helper - Convert Case" />
    <meta property="og:description" content="A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text." />
    <meta property="og:image" content="https://mytexthelper.jubarte.digital/assets/static/icon.png" />
    <meta property="og:url" content="https://mytexthelper.jubarte.digital" />
    <meta property="og:site_name" content="My Text Helper"/>
    <meta name="description" content="A simple and free tool for converting text to UPPERCASE or LOWERCASE. Convert to URL format, encode, decode. Simple and easy to use. Free and online. Converter of texts and words for upper and lower case. Decode that URL full of strange characters into clean text."/>
    <link rel="icon" href="./assets/static/favicon.ico" />
    <link rel="canonical" href="https://mytexthelper.jubarte.digital/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Text Helper | Best Free tool | The Best Convert Case Helper Tool | Encode Text | Decode Text | Best Developer Tool</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
  </Head>

  <Home/>

  </>
  )
  
}
