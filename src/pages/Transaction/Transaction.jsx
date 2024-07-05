import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Button, Card, Flex, Icon, Tag } from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TransactionTable from './components/TransactionTable';

const Transaction = () => {
  const tabs = [{ name: "All", count: 300 }, { name: "deposit", count: 15 }, { name: "Withdraw", count: 55 }, { name: "trade", count: 23 }];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload}></Icon>}>Export CSV</Button>
      </Flex>
      <Card overflowY="auto" maxHeight="500px">
        <Tabs>
          <TabList pt="4" > {/* Set max-width to fit content */}
            {tabs.map((tab) => (
              <Tab key={tab.name} display="flex" gap="2">
                {tab.name} <Tag>{tab.count}</Tag>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
