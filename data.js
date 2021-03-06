var data = {
  view: 'all',
  jobs: [
    {
      title: 'Coals to Newcastle',
      referenceId: '18615',
      stops: [
        {
          type: 'PICKUP',
          address: '4506 East Avenue, Renton, Wa 98058',
          cargoDescription: '6 boxes 10x10x23',
          arrivalTime: '2016-01-19T19:14:33.000Z'
        },
        {
          type: 'DROPOFF',
          address: '6352 Sherwood Drive, Seattle, Wa 98121',
          arrivalTime: '2016-01-19T22:15:52.000Z'
        },
      ],
      distance: '57 mi',
      distanceAway: '12 mi',
      pickupJobs: {
        photo: {
          completed: true,
          time: '2016-01-19T19:14:33.000Z',
          location: {
            latitude: 47.663291699999995,
            longitude: -122.29084139999999
          },
          photos: [
            {
              src: 'data-uri://...',
              expanded: true
            }
          ]
        },
        bill: {
          completed: false
        }
      },
      dropoffJobs: {
        {
          photo: {
            completed: false
          },
          bill: {
            completed: false
          }
        }
      },
      expanded: true,
      completed: true
    },
    {
      title: 'Twinbrook Creamery To Starbucks',
      referenceId: '548482',
      stops: [
        {
          type: 'PICKUP',
          address: '4103 Fulton Street, Renton, Wa 98058',
          cargoDescription: '5 pallets',
          arrivalTime: '2016-01-20T19:00:00.000Z'
        },
        {
          type: 'DROPOFF',
          address: '7745 Cherry Street, Seattle, Wa 98121',
          arrivalTime: '2016-01-20T23:10:00.000Z'
        },
      ],
    },
    {
      title: 'Victrola To Seinheiser',
      referenceId: '4D23C6',
      stops: [
        {
          type: 'PICKUP',
          address: '628 Depot Street, Renton, Wa 98058',
          cargoDescription: '4 pallets',
          arrivalTime: '2016-01-20T21:00:00.000Z'
        },
        {
          type: 'DROPOFF',
          address: '58 Sunset Avenue, Seattle, Wa 98121',
          arrivalTime: '2016-01-21T00:10:00.000Z'
        },
      ],
    },
    {
      title: 'Uber To Imprint',
      referenceId: 'B12311',
      stops: [
        {
          type: 'PICKUP',
          address: '163 Cambridge Road, Renton, Wa 98058',
          cargoDescription: '1 box 12x10x12',
          arrivalTime: '2016-01-20T21:00:00.000Z'
        },
        {
          type: 'DROPOFF',
          address: '668 Jackson Avenue, Seattle, Wa 98121',
          arrivalTime: '2016-01-21T00:10:00.000Z'
        },
      ],
    },
  ]
}