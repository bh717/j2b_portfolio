import Main from "../components/Main"
import Head from "next/head"

export default function index() {
    return <>
    <Head>
        <title>Yuri Corredor | Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Yuri's portfolio. I solve problems using code (Mostly web). Engineer from Somewhere and everywhere."/>
        <meta data-react-helmet="true" name="keywords" content="web developer, web designer, software engineer, freelancer, programmer, platform builder, MVP specialist, automation, tech, Essex, London, contractor, consultant, SaaS builder, backend specialist, TypeScript, node.js, AMQP, TCP, HTTP, websockets, flutter, mobile, react, ios, android, AWS, gcloud, mentor, docker, k8s, kubernetes, lambda, functions, PWAs, architect"/>
    </Head>
    <Main />
    </>
}