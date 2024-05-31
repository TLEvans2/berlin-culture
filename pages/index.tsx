import { Flex, Table, Heading, Tabs, Box, Button, ScrollArea } from '@radix-ui/themes';
import Link from 'next/link'

import '@radix-ui/themes/styles.css';

import eventsData from '../public/events_table_final.json'
import museumData from '../public/museum_recs_final_2.json'
import filmData from '../public/film_recs_final_2.json'

export default function Home() {
  return (
    <Flex direction="column" gap="5" style={{ maxWidth: '960px', margin: '5rem auto 0' }}>
      <Flex direction="column" gap="6" align="center">
        <img src="cuvu.svg" style={{ width: '350px' }} />
        <div style={{ maxWidth: '960px', textAlign: 'justify' }}>
          <Heading size="7" style={{ textAlign: 'justify' }}>
            Do you ever get to the weekend and not know what to do?
            <br />
            <br />
          </Heading>
          <p style={{ textAlign: 'justify', marginBottom: '0.1px' }}>
            This website uses machine learning algorithms and natural language processing to suggest things that might be interesting to you, based on things that are interesting to me. Toggle between film, museum exhibition and event recommendations and enjoy the most cultured weekend of your life.
            <br />
            <br />
            <span style={{ fontWeight: 'bold' }}>Have a great weekend!</span>
            <br />
            <br />
          </p>
          <img src="ber-cult.jpeg" style={{ width: '1000px' }} />
        </div>
      </Flex>

      <Tabs.Root defaultValue='films' style={{ marginTop: '1px' }}>
        <Tabs.List color="pink">
          <Tabs.Trigger value="films" style={{ fontSize: '18px' }} >Films</Tabs.Trigger>
          <Tabs.Trigger value="events" style={{ fontSize: '18px' }} >Events </Tabs.Trigger>
          <Tabs.Trigger value="museum" style={{ fontSize: '18px' }} >Museums</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="events">
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }}>
              <Table.Root>

                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell style={{ width: '15%' }}>Title</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell style={{ width: '30%' }}>Description</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {eventsData.map(data => {
                    return (
                      <Table.Row key={data.translated_title}>
                        <Table.RowHeaderCell style={{ fontWeight: 'bold', fontSize: '20px' }}>{data.translated_title}</Table.RowHeaderCell>
                        <Table.Cell>
                          <img src={data['Image']} alt={data.Title} style={{ maxWidth: '200px', height: 'auto' }} />
                        </Table.Cell>
                        <Table.Cell style={{ width: '100px' }}>{data.translated_date}</Table.Cell>
                        <Table.Cell style={{ width: '400px' }}>{data.translated_text}</Table.Cell>
                        <Table.Cell style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                          <Button color="pink" variant="solid" asChild>
                            <Link href={data.Link} target='_blank'>Learn more</Link>
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                </Table.Body>
              </Table.Root>
            </ScrollArea>
          </Tabs.Content>

          <Tabs.Content value="museum">
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }}>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell style={{ width: '25%' }}>Title</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell style={{ width: '25%' }}></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell style={{ width: '10%' }}>Location</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell style={{ width: '20%' }}>Description</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {museumData.map((data, idx) => {
                    return (
                      <Table.Row key={idx}>
                        <Table.RowHeaderCell style={{ fontWeight: 'bold', fontSize: '20px' }}>{data.h2}</Table.RowHeaderCell>
                        <Table.Cell>
                          <img src={data['Image']} alt={data.h2} style={{ maxWidth: '150px', height: 'auto' }} />
                        </Table.Cell>
                        <Table.Cell>{data.location}</Table.Cell>
                        <Table.Cell>{data.h3}</Table.Cell>
                        <Table.Cell style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                          <Button color="pink" variant="solid" asChild>
                            <Link href={data.Link} target='_blank'>Book now</Link>
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                </Table.Body>
              </Table.Root>
            </ScrollArea>
          </Tabs.Content>

          <Tabs.Content value="films">
            <ScrollArea type="always" scrollbars="vertical" style={{ height: 500 }}>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell style={{ width: '20%' }}>Title</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell style={{ width: '20%' }}></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell style={{ width: '40%' }}>Summary</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>IMDB Rating</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell style={{ width: '113px' }} />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {filmData.map((data, idx) => {
                    return (
                      <Table.Row key={idx}>
                        <Table.Cell style={{ fontWeight: 'bold', fontSize: '20px' }}>{data.Title}</Table.Cell>
                        <Table.Cell>
                          <img src={data['Image URL']} alt={data.Title} style={{ width: '200px', height: 'auto' }} />
                        </Table.Cell>
                        <Table.Cell style={{ fontSize: '15px', alignItems: 'center' }}>{data.Plot}</Table.Cell>
                        <Table.RowHeaderCell style={{ fontWeight: 'bold', fontSize: '20px' }}>{data['Aggregate Rating']}</Table.RowHeaderCell>
                        <Table.Cell style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                          <Button color="pink" variant="solid" asChild>
                            <Link href={data.Link} target='_blank'>Book now</Link>
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    )
                  })}
                </Table.Body>
              </Table.Root>
            </ScrollArea>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

    </Flex>
  );
}
