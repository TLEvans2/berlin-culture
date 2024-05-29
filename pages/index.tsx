import { Flex, Table, Heading, Tabs, Box, Button } from '@radix-ui/themes';
import Link from 'next/link'

import '@radix-ui/themes/styles.css';

import eventsData from '../public/events_table.json'
import museumData from '../public/museum_recs.json'
import filmData from '../public/film_recs.json'

export default function Home() {
  return (
    <Flex direction="column" gap="5" style={{ maxWidth: '960px', margin: '5rem auto 0' }}>
      <Flex direction="column" gap="6" align="center">
        <img src="cuvu.svg" style={{ width: '350px' }} />
        <div style={{ maxWidth: '960px', textAlign: 'justify' }}>
          <Heading size="5" style={{ textAlign: 'justify' }}>
            Do you ever get to the weekend and not know what to do?
            <br />
            <br />
            Are you ever annoyed that stuff is happening all over the city and you always seem to miss it?
            <br />
            <br /> {/* Adds a larger gap */}
            Fear not!
          </Heading>
          <p style={{ textAlign: 'justify', marginBottom: '0.1px' }}>
            This website uses machine learning algorithms and natural language processing to suggest things that might be interesting to you. Toggle between film, museum exhibition and event recommendations and have the most cultured weekend of your life! If you do not like the suggestions, you can just train your own model 😊
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
          <Tabs.Trigger value="museum" style={{ fontSize: '18px' }} >Museum</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="events">

            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell style={{ width: '40%' }}>Description</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {eventsData.map(data => {
                  return (
                    <Table.Row key={data.Title}>
                      <Table.RowHeaderCell>{data.Title}</Table.RowHeaderCell>
                      <Table.Cell>{data.Date}</Table.Cell>
                      <Table.Cell>{data.Description}</Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table.Root>

          </Tabs.Content>

          <Tabs.Content value="museum">

            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell style={{ width: '113px' }} />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {museumData.map((data, idx) => {
                  return (
                    <Table.Row key={idx}>
                      <Table.Cell>{data.h2}</Table.Cell>
                      <Table.RowHeaderCell>{data.location}</Table.RowHeaderCell>
                      <Table.Cell>{data.h3}</Table.Cell>
                      <Table.Cell>
                        <Button color="pink" variant="solid" asChild>
                          <Link href={data.h3} target='_blank'>Book now</Link>
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table.Root>

          </Tabs.Content>

          <Tabs.Content value="films">

            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>IMDB Rating</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell style={{ width: '113px' }} />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {filmData.map((data, idx) => {
                  return (
                    <Table.Row key={idx}>
                      <Table.Cell style={{ fontWeight: 'bold', fontSize: '20px' }}>{data.Title}</Table.Cell>
                      <Table.RowHeaderCell>{data['Aggregate Rating']}</Table.RowHeaderCell>
                      <Table.Cell>
                        <img src={data['Image URL']} alt={data.Title} style={{ width: '100px', height: 'auto' }} />
                      </Table.Cell>
                      <Table.Cell style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Button color="pink" variant="solid" asChild>
                          <Link href={data.Link} target='_blank'>Book now</Link>
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table.Root>

          </Tabs.Content>
        </Box>
      </Tabs.Root>

    </Flex>
  );
}
