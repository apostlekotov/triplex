import { fetchAPI } from './fetchAPI';

export const getPortfolioBlogs = async (
	lang: string,
	limit: number = 100,
	filter: string | null = null
) => {
	const res = await fetchAPI(
		`
    query PortfolioBlogs($where: JSON, $limit: Int ) {
      portfolioBlogs(
        where: $where, limit: $limit, sort: "createdAt:DESC"
      ) {
        title
        slug
        img {
          formats
        }
        description_${lang}
        text_${lang}
        tags {
          tag
        }
      }
    }
  `,
		{
			where: filter
				? {
						'tags.tag': filter,
				  }
				: {},
			limit,
		}
	);

	return res;
};

export const getPreview = async (lang: string, limit: number = 6) => {
	const res = await fetchAPI(
		`
    query PortfolioBlogs($where: JSON, $limit: Int ) {
      portfolioBlogs(
        where: $where, limit: $limit, sort: "createdAt:DESC"
      ) {
        title
        slug
        img {
          formats
        }
        description_${lang}
        tags {
          tag
        }
      }
    }
  `,
		{
			limit,
		}
	);

	return res?.portfolioBlogs;
};

export const getBlogBySlug = async (lang: string, slug: string) => {
	const res = await fetchAPI(
		`
      query PortfolioBlogs($where: JSON) {
        portfolioBlogs(where: $where) {
          title
          slug
          img {
            formats
          }
          banner {
            url
          }
          description_${lang}
          text_${lang}
          tags {
            tag
          }
        }
      }
    `,
		{
			where: { slug },
		}
	);

	return res?.portfolioBlogs[0];
};

export const getSlugs = async () => {
	const res = await fetchAPI(
		`
      query PortfolioBlogs {
        portfolioBlogs {
          slug
        }
      }
    `
	);

	return res?.portfolioBlogs;
};
