import {createBucketClient} from '@cosmicjs/sdk';

async function getData() {
    const cosmic = createBucketClient({
        bucketSlug: 'my-project-production-b7867d30-77e3-11ee-9373-8f5838fa9a52',
        readKey: 'nfsOdEXjAsuBNkPUUKs4FSKU6nLqvf5k83EVPuHGfl0zED03kO',
    });

    let res = await cosmic.objects
        .find({})
        .props(['title', 'metadata.image', 'metadata.headline', 'metadata.max_speed'])
        .limit();
    console.log(res)
}

export {getData}
