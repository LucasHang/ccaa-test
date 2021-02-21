import { useCallback } from 'react';
import Head from 'next/head'
import styled from 'styled-components';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import ccaaTestHeader from '../public/images/base64/ccaa-test-header';
import minhaAssinatura from '../public/images/base64/minha-assinatura';

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  background-color: #000;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 80% 20%;
  place-items: center;
  color: #FFF;
`;

const Button = styled.button`
  background-color: #FF031C;
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 21px 5px rgba(255,3,28,0.67),
                0px 0px 56px -8px rgba(255, 3, 28, 0.67);

    transition: box-shadow 0.3s;
  }
  transition: box-shadow 0.3s;
`;

const MarvelBgImage = styled.div`
  height: 100%; 
  width: 100%;
  background-image: url('images/marvel-studios.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export default function Home() {

  const downloadPdf = useCallback(() => {
    pdfMake.createPdf(generatePdf()).download('LUCAS - PEC9 FINAL FORM1');
  }, []);

  const generatePdf = useCallback(() => {
    return {  
      content: [
        {
          image: ccaaTestHeader,
          width: 500
        },
        {
          text: '\n\nWRITEN EXAM\n\n',
          style: 'header',
          fontSize: 18,
        },
        {
          alignment: 'justify',
          columns: [
            {text: 'I.', style: 'header'},
            {text: 'II. A', style: 'header'},
            {text: 'II. B', style: 'header'},
            {text: 'II. C', style: 'header'},
          ]
        },
        {
          alignment: 'justify',
          columns: [
            {
              separator: ')',
              ol: [
                'His',
                'Where',
                'In',
                'Just',
                'After'
              ]
            },
            {
              separator: ')',
              ol: [
                'B',
                'C',
                'C',
                'A',
                'D'
              ]
            },
            {
              separator: ')',
              ol: [
                'B',
                'B',
                'A',
                'A',
                'A'
              ]
            },
            {
              separator: ')',
              ol: [
                'B',
                'B',
                'A',
                'B',
                'A'
              ]
            }
          ]
        },
        {text: '\n\n'},
        {
          alignment: 'justify',
          columns: [
            {text: 'III. A', style: 'header'},
            {text: 'III. B', style: 'header'},
            {text: 'III. C', style: 'header'},
          ]
        },
        {
          alignment: 'justify',
          columns: [
            {
              separator: ')',
              ol: [
                'A',
                'C',
                'B',
                'C',
                'D'
              ]
            },
            {
              separator: ')',
              ol: [
                '(I) ...Must\'ve done...',
                '(C)',
                '(C)',
                '(I) ...Do me a favor...',
                '(I) ... We make some...'
              ]
            },
            {
              separator: ')',
              ol: [
                'Had bought',
                'To fix',
                'Go',
                'Sit',
                'Would\'ve enjoied'
              ]
            },
          ]
        },
        {text: '\n\n'},
        {
          alignment: 'justify',
          columns: [
            {text: 'IV.', style: 'header'},
            {text: 'V.', style: 'header'},
          ]
        },
        {
          alignment: 'justify',
          columns: [
            {
              text: 'Most likely his friends were driving to the beach very often.\nIt\'s all what a younger want to do when have a car.\nSo the guy should go with his friends and if it is that they are doing bag things, the guy should reprehend his friends'
            },
            {
              separator: ')',
              ol: [
                'No, it has been eons since i watched TV and the content is not healthy',
                'Well, i\'d let clear that i\'m not interested',
                'That day when weekend arrived and i had a test to do',
              ]
            },
          ]
        },
        {text: '\n\n'},
        {
          alignment: 'justify',
          columns: [
            {text: 'VI.', style: 'header'},
            {text: 'VII.', style: 'header'},
          ]
        },
        {
          alignment: 'justify',
          columns: [
            {
              separator: ')',
              ol: [
                'The school wasn\'t on his level and he was bored',
                'Because he is intelligent and that other school specialty is on that kind',
                'They cant, the courses should be open to different teatchers and levels, creating a market of knowledge',
              ]
            },
            {
              text: 'They cant, the answer is already in VI. - 3'
            }
          ]
        },
        {text: '\n\n'},
        {text: '\n\n'},
        {
          text: '\n\nLCT\n\n',
          style: 'header',
          fontSize: 18,
        },
        {
          alignment: 'justify',
          columns: [
            {text: 'A.', style: 'header'},
            {text: 'B.', style: 'header'},
            {text: 'C.', style: 'header'},
            {text: 'D.', style: 'header'},
          ]
        },
        {
          alignment: 'justify',
          columns: [
            {
              separator: ')',
              ol: [
                'C',
                'D',
                'B',
                'B',
                'C',
              ]
            },
            {
              separator: ')',
              ol: [
                'C',
                'D',
                'B',
                'D',
                'A',
              ]
            },
            {
              separator: ')',
              ol: [
                'C',
                'D',
                'C',
                'A',
                'C',
              ]
            },
            {
              separator: ')',
              ol: [
                'Lincoln didn\'t have a rich family',
                'He always studied by himself',
                'The Lincoln monument and his face on the penny and $5 bill',
              ]
            },
          ]
        },
        {
          image: minhaAssinatura,
          width: 100
        },
      ],
      defaultStyle: {
        columnGap: 20
      }
    }
  }, []);

  return (
    <div style={{overflowX: 'hidden'}}>
      <Head>
        <title>CCAA Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header>
          <MarvelBgImage/>
          <h1>
            CONFIDENTIAL
            <br/>
            DO NOT SHARE
          </h1>
        </Header>
        <Button onClick={downloadPdf}>BAIXAR PDF DAS RESPOSTAS DO LUCAS</Button>
      </Container>
    </div>
  )
}
