import Link from 'next/link'
import Image from 'next/image'
import Head from "next/head"

const ProfilePicture = () => (
    <Image
        src="/images/profile.jpg"//Art by Xie Boli https://www.artstation.com/xieboli
        alt="Paul Atreides"
        height={350}
        width={450}
    />
)

export default function FirstPost(){
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <ProfilePicture />
        </>
    )
}
