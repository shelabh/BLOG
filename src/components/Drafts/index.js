import { Grid } from '@material-ui/core'
import Dcard from '/Users/shelabhtyagi/my-blog/src/components/Dcard'


const Drafts = () => {
  let drafts =[1,2,3,4,5,6,7,8,9];
  return (
		drafts.map(dcard => (
		<Grid item lg={3} sm={4} xs={12}>
			<Dcard />
		</Grid>

		))
		
	)

}


const Draft = () => {
  return(
    <Grid container>
      <Grid container item lg={12} xs={12} sm={12}>
					<Drafts/>
			</Grid>
			
    </Grid>
  )
}
export default Draft;