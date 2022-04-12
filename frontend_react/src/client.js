import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "y8g5cu80",
    dataset: "production",
    apiVersion: "2022-02-01",
    useCdn: true,
    token: "skDfdBS3BZZyHdAClDPEmifMS47CHioIY18zDlBx3tETq3y5diq9HYDgZKMWSKcx0Id7ejMEYvRuvCqpLRkSmUfBjiEk3FCMOQvusUbAOkaA4IVQENXL5XluZaamanCQ3iJdVDlgMwdSWNauzi4wuB7tlKQOU0WhFa2C72Eql5Wyj4AJ41pS",
});