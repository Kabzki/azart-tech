import Analytics from "@/components/cases/Analytics"
import Design from "@/components/cases/Design"
import Development from "@/components/cases/Development"
import Digital from "@/components/cases/Digital"
import Members from "@/components/cases/Members"
import Preview from "@/components/cases/Preview"
import Prodaction from "@/components/cases/Prodaction"
import Stack from "@/components/cases/Stack"
import Form from "@/components/home/Form"
import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import Loader from "@/components/shared/Loader"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Case = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [cases, setcases] = useState(null);

    useEffect(() => {
        if (slug) {
        fetchcases(slug);
        }
    }, [slug]);

    const fetchcases = async (slug) => {
        
        const casesQuery = `
        query MyQuery {
            post(where: { slug: "${slug}" }) {
                title
                excerpt
                tags
                createdAt
                slug
                niche
                coverImage {
                    url
                }
                problem
                decision
                stacks
                previewImg {
                    url
                }
                also1
                also2
                alsoResult
                design1
                design2
                design3
                design4
                designResult
                development
                tech
                techTitle
                stacks2
                workingHours
                platforms
                digital
                digitalResult
                promoVideo1
                promoVideo2
                reviewsName
                reviewsImg {
                    url
                }
                reviewsText
                imageSlider
            }
        }`;

        const casesResponse = await fetch(
        "https://api-us-west-2.hygraph.com/v2/clh546yux60qk01t8c3g66zqz/master",
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify({ query: casesQuery }),
        }
        );

        const casesData = await casesResponse.json();
        setcases(casesData.data.post);
    };

    if (!cases) {
        return <Loader/>; 
    }


    return (
        <main>
            <Header/>

            <Preview cases={cases}/>
            <Stack cases={cases}/>

            <Analytics cases={cases}/>
            <Design cases={cases}/>
            <Development cases={cases}/>
            <Digital cases={cases}/>
            <Prodaction cases={cases}/>
            <Members cases={cases}/>
            

            <Form/>
            <Footer/>
        </main>
    )
}

export default Case