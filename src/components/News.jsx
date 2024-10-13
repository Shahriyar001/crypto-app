import React, { useState } from "react";
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoAPi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);

  const demoImage =
    "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  console.log(cryptoNews);
  if (!cryptoNews?.value) return "Data not found";
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.value?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="blank" rel="noreffer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumnail?.contentURL || demoImage}
                  alt="/"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentURL ||
                      demoImage
                    }
                    alt="news"
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
