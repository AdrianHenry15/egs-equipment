export const getEventsQuery = `
  *[_type == "events"] | order(startDate desc) {
    _id,
    name,
    slug,
    type,
    status,
    startDate,
    endDate,
    location {
      venue,
      city,
      state,
      country
    },
    coverImage,
    productsFeatured[]->{
      _id,
      name
    },
    clients[]->{
      _id,
      name
    }
  }
`;

export const getEventByIdQuery = `
  *[_type == "events" && _id == $id][0] {
    _id,
    name,
    slug,
    type,
    description,

    startDate,
    endDate,

    location {
      venue,
      city,
      state,
      country
    },

    status,
    notes,

    coverImage,
    gallery,

    productsFeatured[]->{
      _id,
      name
    },

    clients[]->{
      _id,
      name
    },

    leadsGenerated[]->{
      _id,
      firstName,
      lastName,
      email
    },

    createdAt
  }
`;

export const getUpcomingEventsQuery = `
  *[_type == "events" && startDate >= now() && status == "upcoming"]
    | order(startDate asc) {
      _id,
      name,
      slug,
      startDate,
      endDate,
      location {
        city,
        state,
        country
      },
      coverImage
    }
`;

export const getPastEventsQuery = `
  *[_type == "events" && startDate < now()]
    | order(startDate desc) {
      _id,
      name,
      slug,
      startDate,
      endDate,
      status,
      coverImage
    }
`;

export const getEventsForClientQuery = `
  *[_type == "events" && references($clientId)] {
    _id,
    name,
    startDate,
    endDate,
    type,
    status
  }
`;

export const getEventsForProductQuery = `
  *[_type == "events" && references($productId)] {
    _id,
    name,
    startDate,
    endDate,
    type,
    status
  }
`;
