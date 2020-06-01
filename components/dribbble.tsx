import React, { ReactElement, useState } from 'react'

interface Props {
    dribbbleImages: DribbbleImage[]
}
export interface DribbbleImage{
    Url: string
    Image: string
  }

export function Dribbble({dribbbleImages}: Props): ReactElement {
    const [items, setItems] = useState<Array<DribbbleImage>>(dribbbleImages);
    return(
        <div className="dribbble">
         {items===null||items===undefined ? <div>Fail</div>: <>{items.map((item,i) =>{
            return(
                <a key={i} href={`https://dribbble.com${item.Url}`} >
                    <img src={item.Image + "?compress=1&resize=400x300"} />
                </a>)
          })}</>}
        <style jsx>{`
        .dribbble{
            display:grid;
                grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
                gap:1rem;


            }

            @media(min-width:1400px){
                .dribbble{
                grid-template-columns: repeat( auto-fit, minmax(25%, 1fr) );
                }
            }

            .dribbble a{
                display:block;
            }
        .dribbble img{
            width:100%:
            display:block;
            width:100%;
            max-width:100%;
        }


        }

        `}
            </style>
        </div>
      )
}
