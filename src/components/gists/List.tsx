import React,{useEffect} from "react";
import { IGist } from "../types/models";
import { useSelector, useDispatch } from "react-redux";
import {AppState} from '../../redux/Store';
import { filterGists, fetchGists} from '../../redux/reducers/systemSlice';
import HomeFilter from "../home/HomeFilter";

export default () => {
  const dispatch = useDispatch();

  const gists = useSelector((state:AppState )=>state.system.gists);
  const allGists = useSelector((state:AppState )=>state.system.allGists);

  useEffect(() => {
    if (allGists.length === 0) {
      dispatch(fetchGists())
    }
  }, [gists, dispatch])

  const FilterGistList=(e:any)=>{
    var userName = e.target.userName.value;
    debugger;
    dispatch(filterGists({userName:userName}));
  }

  return (
    <>
    <HomeFilter filterGistList={FilterGistList} />
    <div
      className="main main-spacer-wide u-12@large u-9@medium u-12@small u-12@tiny"
      id="home-merchant-posts"
    >
      <div className="merchant-post">
        {gists.length==0&&
        <span>No Results...</span>}
        {gists.length>0 &&
          gists.map((x:IGist) => {
            return (
              <div className="post-item">
                <div className="row">
                  <div className="col-md-12">
                    <div className="col-md-10">
                      <div className="row">
                        <h3>
                          <a href={"/order/" + x.id}>Gist Info</a>
                        </h3>
                      </div>
                      <div className="row">
                        <ul>
                          <li>
                            <b>ID:</b>
                            <span> {x.id}</span>
                          </li>
                          <li>
                            <b>Description:</b>
                            <span> {x.description}</span>
                          </li>
                          <li>
                            <b>Create Date:</b>
                            <span> {x.created_at}</span>
                          </li>
                          <li>
                            <b>Last Update:</b>
                            <span> {x.updated_at}</span>
                          </li>
                          <li>
                            <b>Public Url:</b>
                            <a href={x.url} target="_blank">
                              {x.url}
                            </a>
                          </li>
                          <li>
                            <b>Git Pull Url:</b>
                            <a href={x.git_pull_url} target="_blank">
                              {x.git_pull_url}
                            </a>
                          </li>
                          <li>
                            <b>Comments:</b>
                            <span> {x.comments}</span>
                          </li>
                          <li>
                            <b>Comments Url:</b>
                            <a href={x.comments_url} target="_blank">
                              {x.comments_url}
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="row">
                        <h3>
                          <a href={"/order/" + x.id}>Owner Info</a>
                        </h3>
                      </div>
                      <div className="row">
                        <ul>
                          <li>
                            <b>ID:</b>
                            <span> {x.owner.id}</span>
                          </li>
                          <li>
                            <b>Username:</b>
                            <span> {x.owner.login}</span>
                          </li>
                          <li>
                            <b>Url:</b>
                             <a href={x.owner.url} target="_blank">
                              {x.owner.url}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    </>
  );
};
