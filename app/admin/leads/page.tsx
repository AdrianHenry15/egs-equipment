import Grid from "../components/grid/grid";
import GridItem from "../components/grid/grid-item";

export default async function LeadsPage() {
    const leads = await fetch("/api/admin/leads").then((r) => r.json());

    return (
        <Grid>
            {leads.map((lead: any) => (
                <GridItem
                    key={lead._id}
                    title={`${lead.firstName} ${lead.lastName}`}
                    subtitle={lead.email}
                    meta={`Interested in ${lead.equipmentInterests?.length ?? 0} items`}
                />
            ))}
        </Grid>
    );
}
