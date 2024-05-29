import { Flex, Table, Heading, Tabs, Box, Button } from '@radix-ui/themes';
import Link from 'next/link'

import '@radix-ui/themes/styles.css';

import eventsData from '../public/events_table.json'
import museumData from '../public/museum_recs.json'

export default function Home() {
  return (
    <Flex direction="column" gap="9" style={{ maxWidth: '960px', margin: '5rem auto 0' }}>
      <Flex direction="column" gap="6" align="center">
        <img src="vercel.svg" style={{ width: '150px' }} />
        <Heading size="9">Berlin Culture Vulture</Heading>
        <img src="next.svg" style={{ width: '150px' }} />
      </Flex>

      <Tabs.Root defaultValue='events'>
        <Tabs.List>
          <Tabs.Trigger value="events">Events</Tabs.Trigger>
          <Tabs.Trigger value="museum">Museum</Tabs.Trigger>
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
                        <Button variant="solid" asChild>
                          <Link href={data.h3} target='_blank'>Book now</Link>
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
