import React from 'react'
import Navigation from '../components/navigation'

import { 
    H1, 
    H2,
    Main, 
    Section, 
    Row, 
    Column ,
    A,
    Divider,
    P,
    Pre,
    Tag,
    Table,
    Thead,
    Tbody,
    Th,
    Tr,
    Td
} from 'proxima-ui'

import AProps from '../data/Layout/AProps.json'
import AsideProps from '../data/Layout/AsideProps.json'
import ArticleProps from '../data/Layout/ArticleProps.json'
import BlockquoteProps from '../data/Layout/BlockquoteProps.json'
import BoldProps from '../data/Layout/BoldProps.json'
import ButtonProps from '../data/Layout/ButtonProps.json'
import ColumnProps from '../data/Layout/ColumnProps.json'
import ContainerProps from '../data/Layout/ContainerProps.json'
import DividerProps from '../data/Layout/DividerProps.json'
import FullProps from '../data/Layout/FullProps.json'
import GridProps from '../data/Layout/GridProps.json'
import H1Props from '../data/Layout/H1Props.json'
import H2Props from '../data/Layout/H2Props.json'
import H3Props from '../data/Layout/H3Props.json'
import H4Props from '../data/Layout/H4Props.json'
import IconProps from '../data/Layout/IconProps.json'
import InputProps from '../data/Layout/InputProps.json'
import ItalicProps from '../data/Layout/ItalicProps.json'
import ListItemProps from '../data/Layout/ListItemProps.json'
import ListProps from '../data/Layout/ListProps.json'
import MainProps from '../data/Layout/MainProps.json'
import MediaProps from '../data/Layout/MediaProps.json'
import PProps from '../data/Layout/PProps.json'
import PreProps from '../data/Layout/PreProps.json'
import RowProps from '../data/Layout/RowProps.json'
import SectionProps from '../data/Layout/SectionProps.json'
import SelectProps from '../data/Layout/SelectProps.json'
import SpanProps from '../data/Layout/SpanProps.json'
import TableProps from '../data/Layout/TableProps.json'
import TagProps from '../data/Layout/TagProps.json'
  

const Layout = (props) => (
    <Main>
        <Row>
          <Navigation />
          <Column padding="15px">
            <Section>
              <H1>Layout</H1>
              <Divider />
              <P>
                Proxima's layout components are primitives which can be used as building blocks for your projects or own components. These are the core components for Proxima's style system which make up all of the components in Proxima and even this website. Each layout component comes with common props which can be used to customize their appearance. They also all accept a <Tag>style</Tag> prop and <Tag>css</Tag> prop for emotion css strings. 
              </P>
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>A</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={AProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Article</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={ArticleProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Aside</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={AsideProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Blockquote</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={BlockquoteProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Bold</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={BoldProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Button</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={ButtonProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Column</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={ColumnProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Container</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={ContainerProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Divider</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={DividerProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Full</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={FullProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Grid</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={GridProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>H1</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={H1Props} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>H2</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={H2Props} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>H3</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={H3Props} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>H4</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={H4Props} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Icon</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={IconProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Input</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={InputProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Italic</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={ItalicProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>List</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={ListProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>ListItem</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={ListItemProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Main</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={MainProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Media</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={MediaProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>P</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={PProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Pre</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={PreProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Row</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={RowProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Section</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={SectionProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Select</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={SelectProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Span</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={SpanProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Table</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={TableProps} />
            </Section>

            <Section margin="64px 0px 0px 0px">
              <H2>Tag</H2>
              <Divider />
              <Table cellWidth="20%" border="1px solid #000000"  padding="10px" data={TagProps} />
            </Section>

          </Column>
        </Row>
      </Main>
)

export default Layout